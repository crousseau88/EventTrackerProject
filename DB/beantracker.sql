-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema beantracker
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `beantracker` ;

-- -----------------------------------------------------
-- Schema beantracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `beantracker` DEFAULT CHARACTER SET utf8 ;
USE `beantracker` ;

-- -----------------------------------------------------
-- Table `beans`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beans` ;

CREATE TABLE IF NOT EXISTS `beans` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(4500) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `type` VARCHAR(4500) NOT NULL,
  `process` VARCHAR(45) NOT NULL,
  `growing_region` VARCHAR(45) NOT NULL,
  `growing_altitude` VARCHAR(45) NULL,
  `blend_base` VARCHAR(450) NULL,
  `roast_level` VARCHAR(45) NOT NULL,
  `buy_again` TINYINT NOT NULL,
  `rating` DOUBLE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS beanuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'beanuser'@'localhost' IDENTIFIED BY 'beanuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'beanuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `beans`
-- -----------------------------------------------------
START TRANSACTION;
USE `beantracker`;
INSERT INTO `beans` (`id`, `name`, `brand`, `type`, `process`, `growing_region`, `growing_altitude`, `blend_base`, `roast_level`, `buy_again`, `rating`) VALUES (1, 'Tropical Weather', 'Onyx Coffee Roasters', 'Blend', 'washed/anaerobic', 'Ethiopia', '1900', 'Ethiopian Bombe Natural, Ethiopian Worka Natural', 'light-medium', 1, 5);
INSERT INTO `beans` (`id`, `name`, `brand`, `type`, `process`, `growing_region`, `growing_altitude`, `blend_base`, `roast_level`, `buy_again`, `rating`) VALUES (2, 'Galactic Standard', 'Brandywine Coffee Roasters', 'Blend', 'washed/natural', 'Colombia/Ethiopia', NULL, 'Colombia Santa Barbara Estate Washed, Ethiopia Shakiso Natural ', 'light-medium', 1, 4.5);
INSERT INTO `beans` (`id`, `name`, `brand`, `type`, `process`, `growing_region`, `growing_altitude`, `blend_base`, `roast_level`, `buy_again`, `rating`) VALUES (3, 'Hair Bender', 'Stumptown Coffee Roasters', 'Blend', 'Washed', 'Indonesia, Latin America, Africa', NULL, 'Not Listed', 'medium', 1, 3.95);
INSERT INTO `beans` (`id`, `name`, `brand`, `type`, `process`, `growing_region`, `growing_altitude`, `blend_base`, `roast_level`, `buy_again`, `rating`) VALUES (4, 'Ethiopia Bombe', 'Maquina Coffee Roasters', 'Single Origin', 'Natural/Raised Bed', 'Ethiopia', '1531', NULL, 'light', 1, 4.90);

COMMIT;

