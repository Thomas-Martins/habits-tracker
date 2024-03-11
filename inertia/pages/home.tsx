import Button from './components/button'
import Layout from './components/layouts/layout'

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <div className="text-center mt-20">
            <h1 className="uppercase text-4xl">You want to track your habits ? </h1>
            <p className="mt-10">
              App'Bitude is an open source app for tracking habits to do more.
            </p>
            <div className="mt-10">
              <a href="/register">
                <Button type="button">Register for free</Button>
              </a>
            </div>
            <div>
              <div className="mx-auto w-[800px] h-[400px] bg-dark-500 mt-20 rounded-lg">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
