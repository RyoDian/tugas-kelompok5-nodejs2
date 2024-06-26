import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export const getProducts = async (req, res) => {
    try {
        const response = await prisma.barang.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getProductById = async (req, res) => {
    try {
        const response = await prisma.barang.findUnique({
            where:{
                id: Number(req.params.id)
            } 
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}

export const createProduct = async (req, res) => {
    const {kode, nama, harga, stok, deskripsi} = req.body
    try {
        const barang = await prisma.barang.create({
            data:{
                kode: kode,
                nama: nama,
                harga: harga,
                stok: stok,
                deskripsi: deskripsi
            }
        })
        res.status(201).json(barang)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const updateProduct = async (req, res) => {
    const {kode, nama, harga, stok, deskripsi} = req.body
    try {
        const barang = await prisma.barang.update({
            where: {
                id: Number(req.params.id)
            },
            data:{
                kode: kode,
                nama: nama,
                harga: harga,
                stok: stok,
                deskripsi: deskripsi
            }
        })
        res.status(200).json(barang)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    const {kode, nama, harga, stok, deskripsi} = req.body
    try {
        const barang = await prisma.barang.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(barang)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}