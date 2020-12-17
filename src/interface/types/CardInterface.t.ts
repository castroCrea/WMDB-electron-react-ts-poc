import { Model } from "@nozbe/watermelondb";
import { default as CardType } from "src/db/model/Card";

export type Card = CardType & Model
