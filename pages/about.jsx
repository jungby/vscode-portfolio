const AboutPage = () => {
  return (
    <>
      <h2>Under development</h2>
      <b>(Sorry about that)</b>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
