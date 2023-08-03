import { NextResponse } from "next/server"
import got from "got"
import * as cheerio from "cheerio"

export async function GET(request: Request) {
  const response = await got(
    "https://auctions.yahoo.co.jp/search/search?auccat=&tab_ex=commerce&ei=utf-8&aq=-1&oq=&sc_i=&fr=auc_top&p=funko+pop&x=0&y=0"
  )

  const $ = cheerio.load(response.body)

  const results = $(".Result")
    .find(".Product__imageData")
    .toArray()
    .map((item) => item.attribs["src"])

  return NextResponse.json(
    { data: results ?? [] },
    {
      status: 200
    }
  )
}
