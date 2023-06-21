import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Compare the risk factors sections of the 2021 SEC 10-K for UPS and 2021 SEC 10-K for FedEx.",
        value: "Compare the Risk Factors sections of the 2021 SEC 10-K for UPS and 2021 SEC 10-K for FedEx."
    },
    { text: "Are there any new acquisitions made by Amazon in 2020?", value: "Are there any new acquisitions made by Amazon in 2020?" },
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
