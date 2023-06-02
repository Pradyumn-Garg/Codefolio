const express = require('express');
const app = express();
const port = 4000;
const puppeteer = require("puppeteer");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const gfgscrape = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [first] = await page.$x('/html/body/div[6]/div/div[2]/div[1]/div/div[3]/div/div[2]/div[1]/div/div/span[2]');
    const txt = await first.getProperty('textContent');
    const rawdata = await txt.jsonValue();

    console.log("here gfgdata", rawdata);
    browser.close();
    return { gfguserdata: rawdata };
}

app.post("/gfg", async (req, res) => {
    let { url } = req.body;

    try {
        const scrapedData = await gfgscrape(url);
        res.json(scrapedData);
    } catch (error) {
        res.status(500).json({ error: 'Scraping failed' });
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});