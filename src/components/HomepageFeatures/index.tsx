import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Mobile-First',
        description: (
            <>
                Crush the competition with EagleScout's simple yet pleasing UI, providing ease of observation and
                tracking. With our impeccable mobile compatibility, focus on the match and forget your phone.
            </>
        ),
    },
    {
        title: 'Offline Support',
        description: (
            <>
                WIFI spotty at comps? Store your scout reports and notes to upload automatically when you get connection
                back! Don’t want to wait? Use our QR code scanning features to immediately share your results with a
                scouting lead!
            </>
        )
    },
    {
        title: 'Enhanced Data Aggregation',
        description: (
            <>
                Perfect your robot game with our integrated picklist creator, match predictors, and AI scout report
                summaries.
            </>
        ),
    },
    {
        title: 'Customizable Forms',
        description: (
            <>
                Don't wait for the app to update after the season begins! With the in-app form editor, scouting leads
                can easily create forms to fit their season-specific needs.
            </>
        ),
    },
    {
        title: 'Your data, Your choice',
        description: (
            <>
                Data integrity and security is of highest priority to us. Every communication and storage area is secured and backed up as often as once per half hour.
            </>
        )
    },
    {
        title: 'Superior Up-time',
        description: (
            <>
                While we promise to stay online for years to come, if you ever have a change of heart, you can download your CSV files and move to another platform.
            </>
        )
    }
];

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
