// bot powered by the redpwn admin bot ofc
['sculpture', {
    name: 'sculpture',
    timeout: 10000,
    handler: async (url, ctx) => {
      const page = await ctx.newPage()
      console.log(await page.browser().version());
      await page.goto("https://web-sculpture-revenge.smiley.cat/", { timeout: 3000, waitUntil: 'domcontentloaded' })
      await sleep(1000);
      await page.evaluate(() => {
        localStorage.setItem("flag", ".;,;.{fak3_flag}")
      })
      await sleep(1000);
      console.log("going to " + url)
      await page.goto(url, { timeout: 3000, waitUntil: 'domcontentloaded' })
      await sleep(1000)
    },
    urlRegex: /^https:\/\/web-sculpture-revenge\.smiley\.cat/,
}]
