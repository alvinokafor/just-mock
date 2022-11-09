import './Profile.css';

import shareIcon from '../../assets/share_icon.svg';

import profileImage from '../../assets/profile__img.png';

function Profile() {
    const copyLink = () => {
        const tooltip = document.getElementsByClassName("tooltiptext")[0];
        navigator.clipboard.writeText("https://github.com").then(() => {
        tooltip.style.visibility = "visible";
        tooltip.innerText = "Link copied to clipboard!";
        setTimeout(() => {
            tooltip.innerText = "Copy link";
            tooltip.style.visibility = "hidden";
        }, 1000);
        });
    };

    return (
        <header>
            <img src={profileImage} alt="user" id="profile__image" />
            <h1>Team Hydraulics</h1>
            <div className="share" onClick={copyLink}>
                <span className="tooltiptext">Copy link</span>
                <img src={shareIcon} alt="share" id="share" />
            </div>
        </header>
    );
}

export default Profile;