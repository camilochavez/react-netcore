USE [master]
GO
/****** Object:  Database [Movie]    Script Date: 9/3/2018 2:34:28 PM ******/
CREATE DATABASE [Movie]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Movie', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Movie.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Movie_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Movie_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Movie] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Movie].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Movie] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Movie] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Movie] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Movie] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Movie] SET ARITHABORT OFF 
GO
ALTER DATABASE [Movie] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Movie] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Movie] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Movie] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Movie] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Movie] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Movie] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Movie] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Movie] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Movie] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Movie] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Movie] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Movie] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Movie] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Movie] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Movie] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Movie] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Movie] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Movie] SET  MULTI_USER 
GO
ALTER DATABASE [Movie] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Movie] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Movie] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Movie] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Movie] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Movie] SET QUERY_STORE = OFF
GO
USE [Movie]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [Movie]
GO
/****** Object:  Table [dbo].[Actor]    Script Date: 9/3/2018 2:34:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Actor](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Gender] [nvarchar](10) NOT NULL,
	[Age] [int] NULL,
	[Picture] [nvarchar](250) NOT NULL
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [Movie] SET  READ_WRITE 
GO
