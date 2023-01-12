import joi from 'joi';


export const validateId=(id)=>
{
    const Schema= joi.object({
        _id:joi.string.required(),
    });
    return Schema.validateAsync(id);
};


export const validateCategory=(Category)=>
{
   const Schema=joi.object({
      category:joi.string.required(),
   });

   return Schema.validateAsync(Category);
};

export const validateSearchString=(searchString)=>
{
      const Schema=joi.object({
        searchString:joi.string.required(),
      });

      return Schema.validateAsync(searchString);
};