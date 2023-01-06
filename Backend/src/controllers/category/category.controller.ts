import autobind from 'autobind-decorator';

import { Response, Request } from 'express';

import { categoryService } from '../../services/category';
import { ICategoryModel } from '../../database';

@autobind
class CategoryController {

  async getAllCategories(req: Request, res: Response) {
    const categories = await categoryService.getCategoryList();
    return res.json({
      count: categories.length,
      data: categories
    });
  }

  async create(req: any, res: Response) {

    let image: string = req.body.image;
    if (req.files?.image?.length > 0) {
      image = req.files?.image[0]?.path.replaceAll("\\", "/");
    }
    const categoryData: ICategoryModel = {
      name: req.body.name,
      description: req.body.description,
      content: req.body.content,
      image: image,
    } as any;

    const result = await categoryService.createCategory(categoryData);

    res.json({
      message: 'Category created successfully',
      data: result
    });
  }

  async update(req: any, res: Response) {
    const checkCategory = await categoryService.getCategoryById(+req.params.id);

    if (!checkCategory) {
      throw new Error('Post not found');
    }

    let image: string = req.body.image;
    if (req.files?.image?.length > 0) {
      image = req.files.image[0].path.replace("\\", "/");
    }

    const categoryData: ICategoryModel = {
     name: req.body.name,
      description: req.body.description,
      content: req.body.content,
      image: image,
    } as any;

    categoryData.id = +req.params.id;
    await categoryService.updateCategory(categoryData);

    res.json({
      message: 'Category updated successfully',
      data: categoryData
    });
  }

  async deleteCategory(req: Request, res: Response) {
    const category_id = +req.params.id;
    const categoryData = await categoryService.getCategoryById(category_id);
    console.log(categoryData);

    if (!categoryData) {
      throw new Error('Category is not found');
    }
    await categoryService.deleteCategoryById(category_id);

    res.json({
      message: 'Category deleted successfully',
      data: categoryData
    })
  }
}

export const categoryController = new CategoryController();