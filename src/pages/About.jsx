function About() {
  return (
    <>
      <article>
        <h2 className="title">
          <span className="red">W</span>hat is Weza?
        </h2>
        <p className="subtitle">Weza react-weather-project</p>

        <p>
          <span className="red">Hi</span> there! [Weza] is a React JS project.
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
          the readings of weather balloons. The lunar calendar is available only
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
        <h2 className="title">
          <span className="red">R</span>elease Notes
        </h2>
        <p className="subtitle">
          Here will be published all updations for weza
        </p>
        <p>
          * New font technology 'woff2' for quickly loading and showing content
        </p>
        <p>
          * New Error-page design, check it <a href="/h">here</a>
        </p>
        <p>* We almost here!!! Speed quality value: 90</p>
      </article>
    </>
  );
}
export default About;
