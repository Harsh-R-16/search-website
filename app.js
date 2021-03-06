let data = [
  [
    "google",
    "https://www.google.com/search",
    "q",
    "https://th.bing.com/th/id/OIP.FvWn9W-UVCp1fDUG7wmRfgHaHa?w=177&h=180&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "facebook",
    "https://www.facebook.com/search/top",
    "q",
    "https://th.bing.com/th/id/OIP.i04IE-gT_qtsWY93iHsUhQHaHa?w=208&h=208&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "linkedin",
    "https://www.linkedin.com/search/results/all",
    "keywords",
    "https://th.bing.com/th/id/OIP.R7_DtfkXYtBlyuGXUEuewQHaHa?w=161&h=180&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "reddit",
    "https://www.reddit.com/search",
    "q",
    "https://th.bing.com/th/id/OIP.ehQBJvgH2nrvUjF3eDci5gHaHa?w=192&h=192&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "youtube",
    "https://www.youtube.com/results",
    "search_query",
    "https://th.bing.com/th/id/OIP.j2SV4dPGWvbmDCkNT0juYwHaHv?w=202&h=210&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "twitter",
    "https://www.twitter.com/search",
    "q",
    "https://th.bing.com/th/id/OIP.2hsJBtNojXgUOzPT7PZ-KAHaHa?w=188&h=189&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "flipkart",
    "https://www.flipkart.com/search",
    "q",
    "https://th.bing.com/th/id/OIP.XiJaMWJmd7llMMmf-3vOYAHaHa?w=168&h=180&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "amazon",
    "https://www.amazon.in/s",
    "k",
    "https://th.bing.com/th/id/OIP.HqCpZrQPrhStI_IuhFOZcAHaHa?w=181&h=181&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "yahoo",
    "https://www.yahoo.com/search",
    "q",
    "https://th.bing.com/th/id/OIP.cyhkcpIJVF7-tpTRDu3PCwHaHa?w=171&h=180&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "stackoverflow",
    "https://www.stackoverflow.com/search",
    "q",
    "https://th.bing.com/th/id/OIP.cdT1okylnJkiQ3krgSccYgHaFj?w=240&h=180&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "pinterest",
    "https://www.pinterest.com/search/pins",
    "q",
    "https://th.bing.com/th/id/OIP.y3Qjn4tYrulXeOwSYJeUkAHaHa?w=193&h=193&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "snapdeal",
    "https://www.snapdeal.com/search?keywords",
    "keyword",
    "https://th.bing.com/th/id/OIP.Wy5K0gUx68SShJ-JjvqsOgHaHa?w=167&h=180&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "quora",
    "https://www.quora.com/search",
    "q",
    "https://th.bing.com/th/id/OIP.jvvvG6k302pAmeJCnvJdPQHaHa?w=213&h=213&c=7&o=5&dpr=1.25&pid=1.7",
  ],
  [
    "github",
    "https://www.github.com/search",
    "q",
    "https://th.bing.com/th?q=GitHub+Black+and+White+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247",
  ],
  [
    "gmail",
    "https://mail.google.com/mail/u/0/#inbox?compose=new",
    "",
    "https://th.bing.com/th/id/OIP.FvWn9W-UVCp1fDUG7wmRfgHaHa?w=177&h=180&c=7&o=5&dpr=1.25&pid=1.7",
  ],
];
if (localStorage.getItem("icon") === null) {
  let a = prompt("Enter your name: ");
  let span = document.querySelector("span");
  span.innerText = a[0].toUpperCase().trim() || "H";
  localStorage.setItem("icon", span.innerText);
} else {
  let a = localStorage.getItem("icon");
  let span = document.querySelector("span");
  span.innerText = a;
}
let section = document.querySelector("section");
for (let i = 0; i < data.length; i++) {
  section.innerHTML += `  <form action=${data[i][1]} target="_blank">
  <img src=${data[i][3]}>
            <label for=${data[i][0]}>${data[i][0].toUpperCase()}: </label>
            <input type="text" id=${data[i][0]} name=${data[i][2]}>
            <button>Search</button>
        </form>`;
}
// https://www.google.com/s2/u/0/favicons?domain=${data[i][0]}.com
