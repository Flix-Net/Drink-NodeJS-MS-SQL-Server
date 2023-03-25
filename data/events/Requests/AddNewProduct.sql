INSERT INTO [PPO3].[dbo].[FinishProduct]
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