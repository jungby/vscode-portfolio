import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: '"email"',
  //   link: 'EMAILUSER@gmail.com',
  //   href: 'mailto:EMAILUSER@gmail.com',
  // },
  {
    social: '"github"',
    link: 'jungby',
    href: 'https://github.com/jungby',
  },
  {
    social: '"medium"',
    link: 'jungby',
    href: 'https://medium.com/@jungby',
  },
  {
    social: '"twitter"',
    link: 'meowrasic',
    href: 'https://www.twitter.com/meowrasic',
  },
  // {
  //   social: '"instagram"',
  //   link: 'INSTAUSER',
  //   href: 'https://www.instagram.com/INSTAUSER/',
  // },
  // {
  //   social: '"linkedin"',
  //   link: 'LINKEDINUSER',
  //   href: 'https://www.linkedin.com/in/LINKEDINUSER/',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>socials </span> = &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          {index < contactItems.length - 1 ? ',' : ''}
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
