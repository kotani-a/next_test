import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post(data) {
  return (
    <Layout>
      {data.postData.title}
      <br />
      {data.postData.id}
      <br />
      {data.postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: data.postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
