function About() {
  return (
    <>
      <article>
        <h2 className="title">
          <span className="red">W</span>hat is Weza?
        </h2>
        <p className="subtitle">Weza react-weather-project</p>

        <p>
          <span className="red">Hi</span> there! I'm Artemy - junior web
          developer, the creater of Weza. [Weza] is a React JS training project.
          The App shows a weather in real-time up to 7 days.
        </p>
        <p>
          Wanna change a city? Just input the name in the search field and press
          ENTER (There is no need to leave 'SPACE' after the name of the city,
          it will not work). If the name entered correctly you will immediately
          see the result. Moreover you can change the appearance of the cards
          and their number. Tired of the light mode? Just change it in the menu
          by pressing on the sun/moon icon
        </p>
        <p>
          Small deviations in the forecast are allowed due to the difference in
          the readings og weather balloons. The lunar calendar is available only
          for Minsk, but we are already working on it. <br /> Stop reading the
          description, go and try{" "}
          <a
            href="https://weza.vercel.app/"
            style={{ textDecoration: "underline" }}
          >
            weza
          </a>{" "}
          for yourself!!!
        </p>
      </article>
    </>
  );
}
export default About;
