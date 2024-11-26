<header >
  <h1 align="center">Portfolio website</h1>
  </header>
<br><br>
<aside> 
  <h2>Built With: </h2> 
  <h3>HTML</h3>
  <h3>CSS</h3>
  <h3>JavaScript</h3>
</aside>

<main>
<p>My name is Vladyslav Terentyev. I am passionate Frontend Developer.</p>

And this is my private website where you may find everything about me:
<ul>
<li>why I came to Front end;</li>
<li>what skills I have;</li>
<li>what projects I did;</li>
<li>and, sure, how to find me.</li>
</ul>
</main>


<style>
   ul {
    list-style: none;
    padding: 0;
  }
  ul li::before {
    content: "•";
    color: linear-gradient(to right, #ff7e5f, #feb47b); /* Градиентный цвет */
    font-size: 1.2rem;
    margin-right: 10px;
  }
</style>
