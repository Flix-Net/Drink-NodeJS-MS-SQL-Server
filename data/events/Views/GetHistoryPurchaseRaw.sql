/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [ID]
     ,[Name]
     ,[Count]
     ,[Unit]
     ,[TotalPrice]
     ,[Cost]
     ,[Date]
     ,[FIO]
FROM [PPO3].[dbo].[HistoryPurchaseRawMaterials]