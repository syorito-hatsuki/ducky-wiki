import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import NoIcon from '@site/static/img/no-icon.svg';
import Link from "@docusaurus/Link";

import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    img?: string;
    description: ReactNode;
    docs: string;
};

const ModsList: FeatureItem[] = [
    {
        title: 'Death Counter',
        img: "https://github.com/syorito-hatsuki/death-counter/blob/1.21.2/src/main/resources/assets/deathcounter/icon.png?raw=true",
        description: (<>Death Counter with client Web UI</>),
        docs: "death-counter"
    },
    {
        title: 'Ducky Updater: ReWork',
        img: "https://github.com/syorito-hatsuki/ducky-updater-rework/blob/1.20/src/main/resources/assets/duckyupdaterrework/icon.png?raw=true",
        description: (<>Simple utility for update mods using Modrinth API</>),
        docs: "ducky-updater-rework"
    },
    {
        title: 'Yet Another Cobblestone Generator',
        img: "https://github.com/syorito-hatsuki/yet-another-cobble-gen/blob/1.21/src/main/resources/assets/yacg/icon.png?raw=true",
        description: (<>Flexible customizable generators</>),
        docs: "yet-another-cobblestone-generator"
    },
];
const LibrariesList: FeatureItem[] = [
    {
        title: "Ducky Updater Lib",
        img: "https://github.com/syorito-hatsuki/ducky-updater-lib/blob/1.20/src/main/resources/assets/duckyupdater/icon.png?raw=true",
        description: "Simple library for checking mod updates from modrinth",
        docs: "ducky-updater-lib"
    },
    {
        title: "ModMenu Badges Lib",
        description: "More badge!!!",
        docs: "modmenu-badges-lib"
    },
]

function Feature({title, img, description, docs}: FeatureItem) {
    return (
        <div className={clsx('col col--3')}>
            <Link to={`/docs/${docs}`} className={styles.featureLink}>
                <div className="text--center">
                    {img ? <img alt={title} src={img}
                                style={{imageRendering: 'pixelated', height: "200px", width: "200px"}}/> :
                        <NoIcon style={{height: "200px", width: "200px"}}/>}
                </div>
                <div className="text--center padding-horiz--md">
                    <Heading as="h3">{title}</Heading>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (<section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem 0",
            width: "100%"
        }}>
            <h1>Mods</h1>
            <section style={{
                display: "flex",
                alignItems: "center",
                padding: "2rem 0",
                width: "100%"
            }}>
                <div className="container">
                    <div className="row">
                        {ModsList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>

            <h1>Libraries</h1>
            <section style={{
                display: "flex",
                alignItems: "center",
                padding: "2rem 0",
                width: "100%"
            }}>
                <div className="container">
                    <div className="row">
                        {LibrariesList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
