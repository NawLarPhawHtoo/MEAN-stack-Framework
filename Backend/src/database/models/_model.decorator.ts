import { Model } from "sequelize";

enum DbModelNameEnum {
  UserDbModel
}

interface AllModels {
  [name: string]: Model;
}

export interface DbModel extends Model {
  associate?(models: AllModels): void | any;
}

export type IDbModelMap = {
  [key in keyof DbModelNameEnum]: any;
};

const models: AllModels = {};

export const AssociativeModel = (target: any) => {
  if (!target) {
    throw new Error('Cannot get property target!');
  }

  models[target.name] = target;

  return target;
};

export const registerModels = () => {
  const modelMapData: [string, Model][] = Object.values(models).map((m: DbModel) => {
    if (typeof m?.associate === 'function') {
      m.associate(models as IDbModelMap);
    }
    return [(m as any).name, m];
  });

  return new Map(modelMapData as any);
}