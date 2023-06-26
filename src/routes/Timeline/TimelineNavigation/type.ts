import { IDataSlides } from "../data"

export interface ITimelineNavigationProps {
    dataSlides: IDataSlides[];
    currentSlideId: number;
    onItemClick: any;
    activeIndex: number;
}
