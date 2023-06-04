const express = require('express');
const app = express();
const port = 4000;
const puppeteer = require("puppeteer");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const gfgscrape = async (gfgurl) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const urlnew = 'https://auth.geeksforgeeks.org/user/' + gfgurl + '/practice/';
    await page.goto(urlnew);

    const gfgdata = {
        username: 'na',
        institute: 'na',
        rank: 'na',
        streak: 'na',
        score: 'na',
        month_score: 'na',
        totalct: 'na',
        schoolct: 'na',
        basicct: 'na',
        easyct: 'na',
        mediumct: 'na',
        hardct: 'na'
    }

    const [first1] = await page.$x('/html/body/div[6]/div/div[2]/div[1]/div/div[1]/div[2]');
    const txt1 = await first1.getProperty('textContent');
    const rawdata1 = await txt1.jsonValue();
    gfgdata.username = rawdata1;

    const [first2] = await page.$x('/html/body/div[6]/div/div[2]/div[1]/div/div[3]/div/div[1]/div[1]/div[2]/a');
    const txt2 = await first2.getProperty('textContent');
    const rawdata2 = await txt2.jsonValue();
    gfgdata.institute = rawdata2;

    const [first3] = await page.$x('/html/body/div[6]/div/div[2]/div[1]/div/div[1]/div[3]/span[1]/b');
    const txt3 = await first3.getProperty('textContent');
    const rawdata3 = await txt3.jsonValue();
    gfgdata.rank = rawdata3;

    const [first4] = await page.$x('/html/body/div[6]/div/div[2]/div[1]/div/div[1]/div[4]/div[2]/div[2]/div[2]');
    const txt4 = await first4.getProperty('textContent');
    const rawdata4 = await txt4.jsonValue();
    const newdata4 = rawdata4.replace(/\s/g, '');
    gfgdata.streak = newdata4;

    const [first5] = await page.$x('/html/body/div[6]/div/div[2]/div[1]/div/div[3]/div/div[2]/div[1]/div/div/span[2]');
    const txt5 = await first5.getProperty('textContent');
    const rawdata5 = await txt5.jsonValue();
    gfgdata.score = rawdata5;

    const [first6] = await page.$x('/html/body/div[6]/div/div[2]/div[1]/div/div[3]/div/div[2]/div[2]/div/div/span[2]');
    const txt6 = await first6.getProperty('textContent');
    const rawdata6 = await txt6.jsonValue();
    gfgdata.totalct = rawdata6;

    const [first12] = await page.$x('/html/body/div[6]/div/div[2]/div[1]/div/div[3]/div/div[2]/div[3]/div/div/span[2]');
    const txt12 = await first12.getProperty('textContent');
    const rawdata12 = await txt12.jsonValue();
    gfgdata.month_score = rawdata12;

    const regex = /\d+(\.\d+)?/g; // Regular expression to match numeric values

    const [first33] = await page.$x('/html/body/div[6]/div/div[2]/div[4]/div[1]/div');
    const txt33 = await first33.getProperty('textContent');
    const rawdata33 = await txt33.jsonValue();
    const tempstring = "Course Attended";

    if (rawdata33 === tempstring) {
        const [first7] = await page.$x('/html/body/div[6]/div/div[2]/div[6]/div[1]/div/ul/li[1]/a');
        const txt7 = await first7.getProperty('textContent');
        const rawdata7 = await txt7.jsonValue();
        const [newdata7] = rawdata7.match(regex); // Array of all matches
        gfgdata.schoolct = newdata7;

        const [first8] = await page.$x('/html/body/div[6]/div/div[2]/div[6]/div[1]/div/ul/li[2]/a');
        const txt8 = await first8.getProperty('textContent');
        const rawdata8 = await txt8.jsonValue();
        const [newdata8] = rawdata8.match(regex); // Array of all matches
        gfgdata.basicct = newdata8;

        const [first9] = await page.$x('/html/body/div[6]/div/div[2]/div[6]/div[1]/div/ul/li[3]/a');
        const txt9 = await first9.getProperty('textContent');
        const rawdata9 = await txt9.jsonValue();
        const [newdata9] = rawdata9.match(regex); // Array of all matches
        gfgdata.easyct = newdata9;

        const [first10] = await page.$x('/html/body/div[6]/div/div[2]/div[6]/div[1]/div/ul/li[4]/a');
        const txt10 = await first10.getProperty('textContent');
        const rawdata10 = await txt10.jsonValue();
        const [newdata10] = rawdata10.match(regex); // Array of all matches
        gfgdata.mediumct = newdata10;

        const [first11] = await page.$x('/html/body/div[6]/div/div[2]/div[6]/div[1]/div/ul/li[5]/a');
        const txt11 = await first11.getProperty('textContent');
        const rawdata11 = await txt11.jsonValue();
        const [newdata11] = rawdata11.match(regex); // Array of all matches
        gfgdata.hardct = newdata11;

    } else {
        const [first7] = await page.$x('/html/body/div[6]/div/div[2]/div[4]/div[1]/div/ul/li[1]/a');
        const txt7 = await first7.getProperty('textContent');
        const rawdata7 = await txt7.jsonValue();
        const [newdata7] = rawdata7.match(regex); // Array of all matches
        gfgdata.schoolct = newdata7;

        const [first8] = await page.$x('/html/body/div[6]/div/div[2]/div[4]/div[1]/div/ul/li[2]/a');
        const txt8 = await first8.getProperty('textContent');
        const rawdata8 = await txt8.jsonValue();
        const [newdata8] = rawdata8.match(regex); // Array of all matches
        gfgdata.basicct = newdata8;

        const [first9] = await page.$x('/html/body/div[6]/div/div[2]/div[4]/div[1]/div/ul/li[3]/a');
        const txt9 = await first9.getProperty('textContent');
        const rawdata9 = await txt9.jsonValue();
        const [newdata9] = rawdata9.match(regex); // Array of all matches
        gfgdata.easyct = newdata9;

        const [first10] = await page.$x('/html/body/div[6]/div/div[2]/div[4]/div[1]/div/ul/li[4]/a');
        const txt10 = await first10.getProperty('textContent');
        const rawdata10 = await txt10.jsonValue();
        const [newdata10] = rawdata10.match(regex); // Array of all matches
        gfgdata.mediumct = newdata10;

        const [first11] = await page.$x('/html/body/div[6]/div/div[2]/div[4]/div[1]/div/ul/li[5]/a');
        const txt11 = await first11.getProperty('textContent');
        const rawdata11 = await txt11.jsonValue();
        const [newdata11] = rawdata11.match(regex); // Array of all matches
        gfgdata.hardct = newdata11;
    }

    // console.log("here gfgdata", gfgdata);
    browser.close();
    return gfgdata;
}

const codechefscrape = async (codechefurl) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const urlnew = 'https://www.codechef.com/users/' + codechefurl;
    await page.goto(urlnew);

    const codechefdata = {
        username: 'na',
        rating: 'na',
        divi: 'na',
        highestrating: 'na',
        grank: 'na',
        crank: 'na',
        contestc: 'na',
        fprob: 'na',
        pprob: 'na'
    }
    const regex = /\d+(\.\d+)?/g; // Regular expression to match numeric values

    const [first1] = await page.$x('/html/body/main/div/div/div/div/div/section[1]/ul/li[1]/span/span[2]');
    const txt1 = await first1.getProperty('textContent');
    const rawdata1 = await txt1.jsonValue();
    codechefdata.username = rawdata1;

    const [first2] = await page.$x('/html/body/main/div/div/div/aside/div[1]/div/div[1]/div[1]');
    const txt2 = await first2.getProperty('textContent');
    const rawdata2 = await txt2.jsonValue();
    codechefdata.rating = rawdata2;

    const [first3] = await page.$x('/html/body/main/div/div/div/aside/div[1]/div/div[1]/div[2]');
    const txt3 = await first3.getProperty('textContent');
    const rawdata3 = await txt3.jsonValue();
    const [newdata3] = rawdata3.match(regex); // Array of all matches
    codechefdata.divi = newdata3;

    const [first4] = await page.$x('/html/body/main/div/div/div/aside/div[1]/div/div[1]/small');
    const txt4 = await first4.getProperty('textContent');
    const rawdata4 = await txt4.jsonValue();
    // const newdata4 = rawdata4.replace(/\(|\)/g, "");
    const [newdata4] = rawdata4.match(regex); // Array of all matches
    codechefdata.highestrating = newdata4;

    const [first5] = await page.$x('/html/body/main/div/div/div/aside/div[1]/div/div[2]/ul/li[1]/a/strong');
    const txt5 = await first5.getProperty('textContent');
    const rawdata5 = await txt5.jsonValue();
    codechefdata.grank = rawdata5;

    const [first6] = await page.$x('/html/body/main/div/div/div/aside/div[1]/div/div[2]/ul/li[2]/a/strong');
    const txt6 = await first6.getProperty('textContent');
    const rawdata6 = await txt6.jsonValue();
    codechefdata.crank = rawdata6;

    const [first7] = await page.$x('/html/body/main/div/div/div/div/div/section[3]/div[1]/div/b');
    const txt7 = await first7.getProperty('textContent');
    const rawdata7 = await txt7.jsonValue();
    codechefdata.contestc = rawdata7;

    const [first8] = await page.$x('/html/body/main/div/div/div/div/div/section[6]/div/h5[1]');
    const txt8 = await first8.getProperty('textContent');
    const rawdata8 = await txt8.jsonValue();
    const [newdata8] = rawdata8.match(regex); // Array of all matches
    codechefdata.fprob = newdata8;

    const [first9] = await page.$x('/html/body/main/div/div/div/div/div/section[6]/div/h5[2]');
    const txt9 = await first9.getProperty('textContent');
    const rawdata9 = await txt9.jsonValue();
    const [newdata9] = rawdata9.match(regex); // Array of all matches
    codechefdata.pprob = newdata9;

    console.log("here codechefdata", codechefdata);
    browser.close();
    return codechefdata;
}


app.post("/gfg", async (req, res) => {
    let { gfgurl } = req.body;

    try {
        const scrapedData = await gfgscrape(gfgurl);
        res.json(scrapedData);
    } catch (error) {
        res.status(500).json({ error: 'gfg scraping failed' });
    }
})

app.post("/codechef", async (req, res) => {
    let { codechefurl } = req.body;

    try {
        const scrapedData = await codechefscrape(codechefurl);
        res.json(scrapedData);
    } catch (error) {
        res.status(500).json({ error: 'codechef scraping failed' });
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});