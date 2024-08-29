import styles from '../styles/About.module.css';

const calculateAge = (birthYear, birthMonth, birthDay) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // getMonth() returns 0-indexed month
  const currentDay = today.getDate();

  let age = currentYear - birthYear;
  
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
};

const SpotifyWidget = () => {
  return (
    <a href="https://open.spotify.com/user/lauraequisde" target="_blank" rel="noopener noreferrer">
      <img
        src="https://novatorem-rust-xi.vercel.app/api/spotify"
        alt="Spotify"
        style={{ width: '40%', height: '10%' }}
      />
    </a>
  );
};


const AboutPage = () => {
  
  const birthYear = 2001;
  const birthMonth = 8;
  const birthDay = 31;
  const age = calculateAge(birthYear, birthMonth, birthDay);
  
  return (
    <>
      <h1>About me</h1>
      <h2><u>Who am I?</u></h2>
      <p>
      My name is Laura, I am from Colombia, and I'm {age} years old. I am very passionate about learning and music, 
      but I also enjoy things like motorsport, nanoblocks, LEGO, and video games. My native language is Spanish, though 
      I can speak English fluently, read Portuguese, and I am currently learning French.
      </p>
      <br></br>
      <h2><u>What have I done?</u></h2>
      <section className={ styles.containerSkills }>
        <div className={ styles.done }>

        <h4><b>Related</b></h4>
          <ul>
            <li>I placed third overall among top engineering students in seminar classes for creating an educational 2D platformer game for elementary school students (2021).</li>
            <li>Achieved the highest score across all Huawei-provided course tests and quizzes in the Seed for the Future program (2021) and made it to .</li>
            <li>Secured second place in the national final of the Huawei ICT competition (2023) in the computing category, competing against top talent from across the country.</li>
            <li>Reached the regional finals of the same competition the following year (2024), competing against top talent across Latin America.</li>
          </ul>
          </div>

        <div className={ styles.done }>
        <h4><b>Unrelated</b></h4>
          <ul>
            <li>Traveled to Mexico for the first time to participate in a science cup against college students as a high school student, and placed third among all projects. 
              I was given the opportunity to present my project in Spain but couldn't do it because COVID-19 intervened (2019).</li>
            <li>Was part of the futsal team in college (2022), and the microfootball and track and field teams in middle school</li>
            <li>Invited by Huawei, UNESCO, and EFE as a special guest to the Regional Summit of Talent in Information and Communications Technologies due to my previous 
              score in Seeds for the Future 2021 (2022).</li>
            <li>Worked for Disney as a Cast Member in merchandise at Hollywood Studios during my summer break (2024).</li>
          </ul>
        </div>
      </section>

      <h2><u>What I would DJ in your car:</u></h2>
      <br></br>
      <div>
        <SpotifyWidget />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
