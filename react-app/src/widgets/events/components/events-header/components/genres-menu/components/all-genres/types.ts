import { ClassificationItem } from "@api/entities/classifications/types.ts";

export type AllGenresProps = {
  items: ClassificationItem[];
  onClickClose: VoidFunction;
  onClickLink: (genreId: string) => void;
  activeLinkId: string;
};
