select
    dbo.RawMaterial.ID,
    dbo.RawMaterial.Name as Name,
    dbo.Unit.Name as Unit,
    count,
    sum,
    Cost
from RawMaterial inner join
    dbo.Unit on RawMaterial.Unit = Unit.ID
