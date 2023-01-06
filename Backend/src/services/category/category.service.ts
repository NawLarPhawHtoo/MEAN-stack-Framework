import { FindOptions } from "sequelize";

import { ICategoryModel, CategoryDbModel } from "../../database";

class CategoryService {

  getCategoryList(options?: FindOptions): Promise<any> {
    return CategoryDbModel.findAll({
      ...options
    }) as any;
  }

  async createCategory(categoryObj: Partial<ICategoryModel>): Promise<CategoryDbModel> {
    const createCategory = await CategoryDbModel.create({ ...categoryObj,created_at: new Date().toISOString() });
    return createCategory;
  }

  async updateCategory(categoryObj: Partial<ICategoryModel>): Promise<any> {
    await CategoryDbModel.update(categoryObj, {
      where: { id: categoryObj.id as number }
    });
  }

  getCategoryById(category_id: number): Promise<any> {
    return CategoryDbModel.findOne({
      where: {
        id: category_id,
      }
    }) as any;
  }

  async deleteCategoryById(id: number): Promise<any> {
    await CategoryDbModel.destroy(
      {
        where: { id },
      }
    );
  }
}
export const categoryService = new CategoryService();