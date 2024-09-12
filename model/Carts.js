import {connection as db} from '../config/index.js'
class Carts{
    fetchCarts(req, res) {
        try{
            const strQry = `
            SELECT distinct c.user_ID, user_Name AS fullName,
                group_concat(DISTINCT p.prod_Name) 'Product',
                sum(p.price * c.quantity)  'Total Price',
                sum(c.quantity) 'Quantity'
            FROM Carts c
            JOIN Users u ON c.user_ID = u.user_ID
            JOIN Products p ON c.prod_ID = p.prod_ID
            group by c.user_ID;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all carts')
                res.json({
                    status: res.statusCode,
                    results: results
                 })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchuserCart(req, res) {
        try{
            const strQry = `
            SELECT c.user_ID, user_Name AS fullName,
                p.prod_ID,
                p.prod_Name 'Product',
                p.price * c.quantity  'Total Price',
                c.quantity 'Quantity'
            FROM Carts c
            JOIN Users u ON c.user_ID = u.user_ID
            JOIN Products p ON c.prod_ID = p.prod_ID
            WHERE c.user_ID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err)
                res.json({
                    status: res.statusCode,
                    results
                 })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchaddUserCart(req, res)  {
        try{
            const strQry = `
            INSERT INTO Carts
            (user_ID, prod_ID, quantity)
            VALUES (${req.params.id}, ${req.body.prod_ID}, ${req.body.quantity});
            `
            console.log(req.params.id, req.body.prod_ID, req.body.quantity);
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err)
                res.json({
                    status: res.statusCode,
                    msg : 'added to cart '
                })
            })
        }  catch (e){
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchupdateUserCart(req, res) {
        try{
            const strQry = `
            UPDATE Carts
            SET quantity = ${req.body.quantity}
            WHERE prod_ID = ${req.params.prod_ID} AND user_ID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to update cart')
                res.json({
                    status: res.statusCode,
                    msg: 'The quantity has been updated. Aragato:grin:'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    deleteItem(req, res) {
        try{
            const strQry = `
            DELETE FROM Carts
            WHERE prod_ID = ${req.params.prod_ID} AND user_ID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete item')
                res.json({
            status: res.statusCode,
            msg: 'An item was removed'
            })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    deleteCart(req,res){
        try{
            const strQry = `
            DELETE FROM Carts
            WHERE user_ID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete this Cart')
                res.json({
            status: res.statusCode,
            msg: 'A cart was removed'
            })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
}
export {
    Carts
}















