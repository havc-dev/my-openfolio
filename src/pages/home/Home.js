
import './Home.css'
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/layout/Header';
import Button from '../../components/Button/Button';

const Home = (props) => {

    const { info } = props;
    const { title, sub_title, text, button } = info;
    const { className, icon, btn_text, type} = button;
    
    return (
        <div className="home-wrapper">
            <NavBar />
            <main className="home">
            <Header title={title} subtitle={sub_title} />
            <div className="text">
                <h3>{text}</h3>
            </div>
            <Button
                className={className}
                icon={icon}
                btn_text={btn_text}
                type={type}
            />
            </main>
        </div>
    )
}

export default Home
