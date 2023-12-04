-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT,
    "description" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
