-- CreateTable
CREATE TABLE `Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `maxCapacity` INTEGER NULL,
    `requlaarPrice` DOUBLE NULL,
    `discount` INTEGER NULL,
    `description` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `Room_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Setting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL,
    `minbookingLength` INTEGER NOT NULL,
    `maxBookingLength` INTEGER NOT NULL,
    `maxGuestsPerBooking` INTEGER NOT NULL,
    `breakfastPrice` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Guest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nationalID` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `countryFlag` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Guest_email_key`(`email`),
    UNIQUE INDEX `Guest_nationalID_key`(`nationalID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,
    `numNights` INTEGER NOT NULL,
    `numGusts` INTEGER NOT NULL,
    `roomPrice` INTEGER NOT NULL,
    `exterasPrice` INTEGER NOT NULL,
    `totalPrice` INTEGER NOT NULL,
    `status` ENUM('UNCONFIRMED', 'CONFIRMED') NOT NULL,
    `hasbreakfast` BOOLEAN NOT NULL,
    `isPaid` BOOLEAN NOT NULL,
    `observations` VARCHAR(191) NULL,
    `roomId` INTEGER NOT NULL,
    `guestId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
