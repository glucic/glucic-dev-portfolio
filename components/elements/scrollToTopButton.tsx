import {motion, useAnimationControls, useScroll, Variants} from "motion/react";
import {useEffect} from "react";
import {IconArrowBigUpFilled} from "@tabler/icons-react";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const ScrollToTopContainerVariants: Variants = {
    hide: {opacity: 0, y: 100},
    show: {opacity: 1, y: 0},
};

export function ScrollToTopButton() {
    const {scrollYProgress} = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            className="fixed bottom-0 right-0 m-8 p-3"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <IconArrowBigUpFilled size="36px"/>
        </motion.button>
    );
}