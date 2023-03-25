INSERT INTO [PPO3].[dbo].[RawMaterial]
(
    [Name],
    [Unit]
)
VALUES
    (
    @Name,
    @Unit
    )

SELECT SCOPE_IDENTITY() AS eventId