import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappIcon,
  WhatsappShareButton,
  ViberShareButton,
  ViberIcon,
} from "react-share";

function SocialShare({ url }) {
  var message =
    "Get upto 50 GB FREE DATA to your Dialog, Mobitel, AirTel or Hutch mobile! Hurry now, it's a limited time offer!!";

  return (
    <>
      <div style={style.shareButton}>
        <WhatsappShareButton url={url} title={message} separator=":: ">
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
      </div>
      <div style={style.shareButton}>
        <TelegramShareButton url={url} title={message}>
          <TelegramIcon size={40} round />
        </TelegramShareButton>
      </div>

      <div style={style.shareButton}>
        <FacebookMessengerShareButton url={url} appId="459734535423100">
          <FacebookMessengerIcon size={40} round />
        </FacebookMessengerShareButton>
      </div>

      <div style={style.shareButton}>
        <ViberShareButton url={url} title={message}>
          <ViberIcon size={40} round />
        </ViberShareButton>
      </div>
    </>
  );
}

var style = {
  shareButton: {
    margin: "0 5px",
    display: "inline-block",
  },
};

export default SocialShare;
