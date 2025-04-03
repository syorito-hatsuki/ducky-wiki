import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import NoIcon from '@site/static/img/no-icon.svg';
import Link from "@docusaurus/Link";

import styles from './styles.module.css';

type FeatureItem = {
    description: ReactNode;
    docs: string;
    img?: string;
    title: string;
    type: "mods" | "libs";
};

const ModsList: FeatureItem[] = [
    {
        title: 'Death Counter',
        description: (<>Death Counter with client Web UI</>),
        docs: "death-counter",
        type: "mods",
        img: "https://github.com/syorito-hatsuki/death-counter/blob/1.21.2/src/main/resources/assets/deathcounter/icon.png?raw=true"
    },
    {
        title: 'Ducky Updater: ReWork',
        description: (<>Simple utility for update mods using Modrinth API</>),
        docs: "ducky-updater-rework",
        type: "mods",
        img: "https://github.com/syorito-hatsuki/ducky-updater-rework/blob/1.20/src/main/resources/assets/duckyupdaterrework/icon.png?raw=true"
    },
    {
        title: 'Yet Another Cobblestone Generator',
        description: (<>Flexible customizable generators</>),
        docs: "yet-another-cobblestone-generator",
        type: "mods",
        img: "https://github.com/syorito-hatsuki/yet-another-cobble-gen/blob/1.21/src/main/resources/assets/yacg/icon.png?raw=true"
    },
];
const LibrariesList: FeatureItem[] = [
    {
        title: "Ducky Updater Lib",
        description: "Simple library for checking mod updates from modrinth",
        docs: "ducky-updater-lib",
        type: "libs",
        img: "https://github.com/syorito-hatsuki/ducky-updater-lib/blob/1.20/src/main/resources/assets/duckyupdater/icon.png?raw=true"
    },
    {
        title: "ModMenu Badges Lib",
        description: "More badge!!!",
        docs: "modmenu-badges-lib",
        type: "libs"
    },
]

function Feature({title, img, description, docs, type}: FeatureItem) {
    return (
        <div className={clsx('col col--3')}>
            <Link to={`/docs/${type}/${docs}`} className={styles.featureLink}>
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
