import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './sharebox.module.scss';


const ShareBox = ({ item }) => {

    const url = `https://getthanky.com/thanks?id=${item.id}&author=${item.author}`;
    const title = `${item.entry}`;

    return (
        <div className={styles.ShareBox}>
            <p>
                The best way to spread joy and cheer is spreading
                gratitude far and near 🎉
            </p>
            <div className={styles.ShareBox__buttons}>
                <FacebookShareButton url={url} quote={title} hashtag={'#thanky'}>
                    <FaFacebookF />
                </FacebookShareButton>
                <TwitterShareButton url={url} title={title} hashtags={['#thanky']} via={'getthanky.com'}>
                    <FaTwitter />
                </TwitterShareButton>
                <LinkedinShareButton url={url} summary={title} source={'getthanky.com'}>
                    <FaLinkedin />
                </LinkedinShareButton>
                <EmailShareButton subject={"Thanks!"} url={url}>
                    <FaEnvelope />
                </EmailShareButton>
            </div>
        </div>
    );
};

export default ShareBox;
