import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Laura is a highly motivated and dedicated system engineering student pursuing to become a DevOps someday"
      />
      <meta
        name="keywords"
        content="laura rodriguez, maria laura rodriguez, sysadmin portfolio, laura systems administrator, laura developer, linux, command line, laura rodriguez portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Laura Rodriguez's Portfolio" />
      <meta
        property="og:description"
        content="A systems administator eager to learn"
      />
      <meta property="og:image" content="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/travolta-confundido-el-meme-del-momento/86630754-1-esl-ES/Travolta-confundido-el-meme-del-momento.jpg" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Laura Rodriguez',
};
