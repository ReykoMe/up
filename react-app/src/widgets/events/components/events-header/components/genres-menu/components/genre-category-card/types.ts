import { ClassificationItem } from "@api/entities/classifications/types.ts";

export type GenreCategoryCardProps = {
  item: ClassificationItem;
  onItemClick: (genreId: string) => void;
  activeLinkId: string;
};
