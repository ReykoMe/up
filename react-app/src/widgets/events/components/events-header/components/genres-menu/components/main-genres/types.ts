import { ClassificationItem } from "@api/entities/classifications/types.ts";

export type MainGenresProps = {
  items: ClassificationItem[];
  onClickMore: VoidFunction;
  onClickLink: (genreId: string) => void;
  isLinksDisabled?: boolean;
  activeLinkId: string;
};
