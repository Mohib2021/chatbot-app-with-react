import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import style from "./Header.module.css";

function Header() {
	const [isActive, setIsActive] = useState(false);
	
	return (
		<div className={style.position}>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
                    <img className={style.logoImg} src="https://img.icons8.com/ios/100/000000/chat--v1.png"/>
						
					</Navbar.Brand>
					<div
						className={`ms-auto ${style.navigationLink} ${
							isActive && style.animation
						} `}
					>
						<Nav.Link>
							<img className={style.chatbotImg} src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="chatbot-img" />
						</Nav.Link>
                        <Nav.Link className="active" >
							John Doe
						</Nav.Link>
					</div>
					<div
						onClick={() => setIsActive(!isActive)}
						className={`${style.burger} ${isActive && style.toggle}`}
					> 
                    {/* hum burger lines */}
						<div className={style.line1}></div>
						<div className={style.line2}></div>
						<div className={style.line3}></div>
						<div className={style.line4}></div>
					</div>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;