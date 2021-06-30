import Main from '../../components/layout/Main';
import NavBarSpacer from '../../components/layout/NavBarSpacer';
import CallToAction from '../../components/CallToAction/CallToAction';

import './Home.css'

const Home = (props) => {

    const { info } = props;
    const { title, sub_title, text, button } = info;
    const { className, icon, btn_text, type} = button;
    
    return (
        <>
        <Main>
            <NavBarSpacer />
            <div className="home">
                <div className="header">
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <div className="subtitle">
                        <h2>{sub_title}</h2>
                    </div>
                </div>
                <div className="text">
                    <h3>{text}</h3>
                </div>
                <CallToAction
                    className={className}
                    icon={icon}
                    btn_text={btn_text}
                    type={type}
                />
            </div>
        </Main>
        </>
    )
}

export default Home
