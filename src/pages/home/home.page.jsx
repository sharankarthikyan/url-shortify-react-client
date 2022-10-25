import { useState } from "react";
import ValidURL from "valid-url";
import axios from "axios";

import {
    HomeOuterDiv,
    HomeTitleDiv,
    MainCardComponent,
    MainCardTitleDiv,
    MainCardOuterComponent,
    MainCardTitleOuterDiv,
    InputComponentOuterDiv,
    CardFooterComponent,
    MainCardInnerComponent,
    // MainCardInnerFooterComponent,
} from "./home.styles";

import PrimaryBtn from "../../components/buttons/primary/primary.component";
import InputComponent from "../../components/input/input.component";

const HomePage = () => {
    const [url, setUrl] = useState("");
    const [showCard, setShowCard] = useState(false);
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [copyContent, setCopyContent] = useState("Copy");

    const handleShortify = () => {
        if (url === "" || !ValidURL.isUri(url)) {
            console.error("Invalid URL");
            return;
        }
        // "https://url-shortify.azurewebsites.net/api/v1/url",
        axios({
            method: "post",
            url: process.env.REACT_APP_SHORTIFY_BACKEND_URL + "api/v1/url",
            data: {
                original_url: url,
            },
        }).then((res) => {
            if (res && res.data && res.data.aliases.length) {
                let alias = res.data.aliases[0].alias;
                let shortenedUrl = window.location.origin + "/" + alias;
                setShortenedUrl(shortenedUrl);
                setShowCard(true);
            }
        });
    };

    const handleCopy = (fromReset) => {
        navigator.clipboard.writeText(shortenedUrl);
        if (!fromReset) {
            setCopyContent("Copied!!");
            setTimeout(() => {
                setCopyContent("Copy");
            }, 2000);
        }
    };

    const handleCopyAndReset = () => {
        handleCopy(true);

        setTimeout(() => {
            setUrl("");
            setShowCard(false);
            setShortenedUrl("");
        }, 1000);
    };

    return (
        <HomeOuterDiv>
            <HomeTitleDiv>URL SHORTIFY</HomeTitleDiv>
            <MainCardOuterComponent>
                <MainCardComponent>
                    <MainCardTitleOuterDiv>
                        <MainCardTitleDiv>
                            Paste the URL to be shortened
                        </MainCardTitleDiv>
                    </MainCardTitleOuterDiv>
                    <CardFooterComponent>
                        <InputComponentOuterDiv>
                            <InputComponent
                                width="460px"
                                placeholder="Enter URL"
                                onChange={(e) => setUrl(e.target.value)}
                                value={url}
                            />
                        </InputComponentOuterDiv>
                        <PrimaryBtn
                            content="Shortify it"
                            handleClick={handleShortify}
                        />
                    </CardFooterComponent>
                </MainCardComponent>
            </MainCardOuterComponent>
            {showCard ? (
                <MainCardOuterComponent>
                    <MainCardComponent>
                        <MainCardInnerComponent>
                            <InputComponentOuterDiv>
                                <InputComponent
                                    width="360px"
                                    disabled={true}
                                    value={shortenedUrl}
                                />
                            </InputComponentOuterDiv>
                            {/* <MainCardInnerFooterComponent> */}
                            <PrimaryBtn
                                content={copyContent}
                                handleClick={handleCopy}
                            />
                            <PrimaryBtn
                                content="Copy & reset"
                                handleClick={handleCopyAndReset}
                            />
                            {/* </MainCardInnerFooterComponent> */}
                        </MainCardInnerComponent>
                    </MainCardComponent>
                </MainCardOuterComponent>
            ) : (
                ""
            )}
        </HomeOuterDiv>
    );
};

export default HomePage;
