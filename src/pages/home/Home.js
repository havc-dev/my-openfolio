
import './Home.css'
import Header from '../../components/layout/Header';
import Button from '../../components/Button/Button';

const Home = (props) => {

    const { info } = props;
    const { title, sub_title, text, button } = info;
    const {  icon, btn_text, type} = button;
    
    return (
        <div className="page-wrapper">
            <main className="home">
                <div className="header">
                    <Header title={title} subtitle={sub_title} />
                </div>
                <div className="text">
                    <p className="text">{text}</p>
                </div>
                <Button
                    icon={icon}
                    btn_text={btn_text}
                    type={type}
                />
            </main>
        </div>
    )
}

export default Home
