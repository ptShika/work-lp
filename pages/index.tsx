import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>U-lab公式サイト 活動紹介</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center relative pt-4 md:pt-20 pb-20">
        <div style={{ maxWidth: 1000 }}>
          <div className="flex flex-col-reverse md:flex-roq justify-center px-4 md:px-0">
            <div>
              <p className="mb-4 text-lg font-bold tracking-widest">大学や街を遊び歩く</p>
              <h2 className="mb-4 text-4xl font-bold tracking-widest">
                <div className="mb-4">地域に根差す</div>
                <div>テクノロジー集団</div>
              </h2>
              <p className="tracking-wide leading-loose">"学生団体U-labは、宇都宮大学の学生が中心となって、デザインやテクノロジーを用いて街や大学に対して面白いことを企て、実行する学生団体です。
                圧倒的なインプット環境、普通では参加できないインターン、大規模なチームプロジェクトなどを行い、宇都宮大学で最も勢いのある学生団体を目指します。
                また、定期的なゲーム会やご飯会などを通し、日々仲を深めています。
              </p>
            </div>

            <div>
              <h1 style={{ minWidth: '320px' }} className="flex justify-center">
                  <div className="hidden md:block">

                  </div>
                  <div className="md:hidden pb-4 pl-8"></div>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center md-20">
          <div style={{maxWidth: 1000}}>
            <h2 className="mb-6 text-center">
              <span>U-labの</span>
              <br></br>
              <span className="text-2xl font-bold tracking-widest">活動内容</span> 
            </h2> 
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home