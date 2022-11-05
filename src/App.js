import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Link from "./components/Link/Link";

const LINKS = [
  {
    href: "https://twitter.com/harcourt_hamsa",
    id: "btn__twitter",
    label: "Twitter Link",
  },
  {
    href: "https://training.zuri.team/",
    id: "btn__zuri",
    label: "Zuri Team",
  },
  {
    href: "http://books.zuri.team",
    id: "books",
    label: "Zuri Books",
  },
  {
    href: "https://books.zuri.team/python-for-beginners?ref_id=Ohabikks",
    id: "book__python",
    label: "Python Books",
  },
  {
    href: "https://background.zuri.team",
    id: "pitch",
    label: "Background Check for Coders",
  },
  {
    href: "https://books.zuri.team/design-rules",
    id: "book__design",
    label: "Design Books",
  },
  {
    href: "/contact",
    id: "contact",
    label: "Contact Me",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      {LINKS.map((link, index) => {
        return (
          <Link href={link.href} id={link.id} label={link.label} key={index} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
