import { AuthStoreOptions, Slug } from "sanity";

type Base = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};

interface Post extends Base{
  author: AuthStoreOptions;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}