import { Transaction } from "sequelize";

import { db } from "../db.provider";

export const createTransaction=():Promise<Transaction>=> db.transaction();