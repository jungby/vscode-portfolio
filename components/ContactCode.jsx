import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: '"email"',
  //   link: 'EMAILUSER@gmail.com',
  //   href: 'mailto:EMAILUSER@gmail.com',
  // },
  {
    social: '"linkedin"',
    link: 'laurarodriguezo',
    href: 'https://www.linkedin.com/in/laurarodriguezo/',
  },
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
  // {
  //   social: '"instagram"',
  //   link: 'INSTAUSER',
  //   href: 'https://www.instagram.com/INSTAUSER/',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.codeVariable}>socials </span>
        <span className={styles.codeOperator}>= </span>
        <span className={styles.codeBracket}>&#123;</span>
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;
          <span className={styles.codeItem}>{item.social}</span>
          <span className={styles.codeOperator}>:</span>{' '}
          <a href={item.href} target="_blank" rel="noopener" className={styles.codeVariable}>
            {item.link}
          </a>
          {index < contactItems.length - 1 ? <span className={styles.codeOperator}>,</span> : ''}
        </p>
      ))}
      <p className={styles.line}>
        <span className={styles.codeBracket}>&#125;</span>
      </p>
    </div>
  );
};

export default ContactCode;
