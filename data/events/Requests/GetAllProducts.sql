select
    FinishProduct.ID,
    FinishProduct.Name,
    Unit.Name as Unit,
    FinishProduct.Count,
    FinishProduct.Sum,
    FinishProduct.Cost
from [PPO3].[dbo].[FinishProduct] inner join
     Unit on FinishProduct.Unit = Unit.ID
