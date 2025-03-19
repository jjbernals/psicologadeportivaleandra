import React from "react";
import "./SocialMedia.scss";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function SocialMedia() {
    return (
        <div className="social-media-div">
            <a
                href="https://www.linkedin.com/in/leandra-lorena-prada-cruz-95224a251/"
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedinIn />
            </a>

            <a
                href="https://www.tiktok.com/@psicologadeportivallpc?is_from_webapp=1&sender_device=pc"
                className="icon-button tiktok"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SiTiktok />
            </a>

            <a
                href="https://www.instagram.com"
                className="icon-button instagram"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram />
            </a>
        </div>
    );
}
